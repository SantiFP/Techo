import React from 'react';
import { Avatar, Chip, Stack } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import useUser from 'hooks/useUser';

const ViewChips = () => {
    const { profile } = useUser();
    return (
        <Stack direction='row' alignItems='center' justifyContent='start' spacing={4} mb={4} >


            <Chip
                label='MIS OBJETIVOS'
                onClick={() => { }}
                color="secondary"
                icon={<Avatar
                    alt={profile.name}
                    src={profile.imageUrl}
                    sx={{ width: 24, height: 24 }}
                />}
                sx={{ fontWeight: "bold" }}
            />
            <Chip
                label='MI EQUIPO'
                variant='outlined'
                onClick={() => { }}
                color="secondary"
                icon={<GroupsIcon />}
                sx={{ fontWeight: "bold" }}
            />
        </Stack>
    );
}

export default ViewChips;