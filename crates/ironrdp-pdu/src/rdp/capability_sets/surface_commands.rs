#[cfg(test)]
mod tests;

use std::io;

use bitflags::bitflags;
use byteorder::{LittleEndian, ReadBytesExt as _, WriteBytesExt as _};

use crate::rdp::capability_sets::CapabilitySetsError;
use crate::PduParsing;

const SURFACE_COMMANDS_LENGTH: usize = 8;

bitflags! {
    #[derive(Debug, Clone, Copy, PartialEq, Eq, PartialOrd, Ord, Hash)]
    pub struct CmdFlags: u32 {
        const SET_SURFACE_BITS = 0x02;
        const FRAME_MARKER = 0x10;
        const STREAM_SURFACE_BITS = 0x40;
    }
}

#[derive(Debug, PartialEq, Eq, Clone)]
pub struct SurfaceCommands {
    pub flags: CmdFlags,
}

impl PduParsing for SurfaceCommands {
    type Error = CapabilitySetsError;

    fn from_buffer(mut buffer: impl io::Read) -> Result<Self, Self::Error> {
        let flags = CmdFlags::from_bits_truncate(buffer.read_u32::<LittleEndian>()?);
        let _reserved = buffer.read_u32::<LittleEndian>()?;

        Ok(SurfaceCommands { flags })
    }

    fn to_buffer(&self, mut buffer: impl io::Write) -> Result<(), Self::Error> {
        buffer.write_u32::<LittleEndian>(self.flags.bits())?;
        buffer.write_u32::<LittleEndian>(0)?; // reserved

        Ok(())
    }

    fn buffer_length(&self) -> usize {
        SURFACE_COMMANDS_LENGTH
    }
}
