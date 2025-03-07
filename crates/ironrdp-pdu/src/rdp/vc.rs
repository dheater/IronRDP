pub mod dvc;

#[cfg(test)]
mod tests;

use std::{io, str};

use bitflags::bitflags;
use byteorder::{LittleEndian, ReadBytesExt as _, WriteBytesExt as _};
use thiserror::Error;

use crate::PduParsing;

pub const DRDYNVC_CHANNEL_NAME: &str = "drdynvc";

const CHANNEL_PDU_HEADER_SIZE: usize = 8;

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct ChannelPduHeader {
    /// The total length in bytes of the uncompressed channel data, excluding this header
    ///
    /// The data can span multiple Virtual Channel PDUs and the individual chunks will need to be
    /// reassembled in that case (section 3.1.5.2.2 of MS-RDPBCGR).
    pub length: u32,
    pub flags: ChannelControlFlags,
}

impl PduParsing for ChannelPduHeader {
    type Error = ChannelError;

    fn from_buffer(mut stream: impl io::Read) -> Result<Self, Self::Error> {
        let total_length = stream.read_u32::<LittleEndian>()?;
        let flags = ChannelControlFlags::from_bits_truncate(stream.read_u32::<LittleEndian>()?);

        Ok(Self {
            length: total_length,
            flags,
        })
    }

    fn to_buffer(&self, mut stream: impl io::Write) -> Result<(), Self::Error> {
        stream.write_u32::<LittleEndian>(self.length)?;
        stream.write_u32::<LittleEndian>(self.flags.bits())?;

        Ok(())
    }

    fn buffer_length(&self) -> usize {
        CHANNEL_PDU_HEADER_SIZE
    }
}

bitflags! {
    #[derive(Debug, Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]
    pub struct ChannelControlFlags: u32 {
        const FLAG_FIRST = 0x0000_0001;
        const FLAG_LAST = 0x0000_0002;
        const FLAG_SHOW_PROTOCOL = 0x0000_0010;
        const FLAG_SUSPEND = 0x0000_0020;
        const FLAG_RESUME  = 0x0000_0040;
        const FLAG_SHADOW_PERSISTENT = 0x0000_0080;
        const PACKET_COMPRESSED = 0x0020_0000;
        const PACKET_AT_FRONT = 0x0040_0000;
        const PACKET_FLUSHED = 0x0080_0000;
        const COMPRESSION_TYPE_MASK = 0x000F_0000;
    }
}

#[derive(Debug, Error)]
pub enum ChannelError {
    #[error("IO error")]
    IOError(#[from] io::Error),
    #[error("From UTF8 error: {}", _0)]
    FromUtf8Error(#[from] std::string::FromUtf8Error),
    #[error("Invalid channel PDU header")]
    InvalidChannelPduHeader,
    #[error("Invalid channel total data length")]
    InvalidChannelTotalDataLength,
    #[error("Invalid DVC PDU type")]
    InvalidDvcPduType,
    #[error("Invalid DVC id length value")]
    InvalidDVChannelIdLength,
    #[error("Invalid DVC data length value")]
    InvalidDvcDataLength,
    #[error("Invalid DVC capabilities version")]
    InvalidDvcCapabilitiesVersion,
    #[error("Invalid DVC message size")]
    InvalidDvcMessageSize,
    #[error("Invalid DVC total message size: actual ({actual}) > expected ({expected})")]
    InvalidDvcTotalMessageSize { actual: usize, expected: usize },
}

impl From<ChannelError> for io::Error {
    fn from(e: ChannelError) -> io::Error {
        io::Error::new(io::ErrorKind::Other, format!("Virtual channel error: {e}"))
    }
}

impl ironrdp_error::legacy::ErrorContext for ChannelError {
    fn context(&self) -> &'static str {
        "virtual channel error"
    }
}
