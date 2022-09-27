// @mui
import PropTypes, { any, number, string } from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
// components
import Iconify from '@/components/Iconify';

// ----------------------------------------------------------------------

const IconWrapperStyle = styled('div')(({ theme }: any) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

TotalComponent.propTypes = {
    value: any,
    color: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    sx: PropTypes.object,
};

export default function TotalComponent({
    value,
    title,
    icon,
    color = 'primary',
    sx,
    ...other
}: any) {
    return (
        <Card
            sx={{
                py: 5,
                boxShadow: 0,
                textAlign: 'center',
                color: (theme: any) => theme.palette[color].darker,
                bgcolor: (theme: any) => theme.palette[color].lighter,
                ...sx,
            }}
            {...other}
        >
            <IconWrapperStyle
                sx={{
                    color: (theme: any) => theme?.palette[color]?.dark,
                    backgroundImage: (theme: any) =>
                        `linear-gradient(135deg, ${alpha(
                            theme?.palette[color]?.dark,
                            0
                        )} 0%, ${alpha(theme?.palette[color]?.dark, 0.24)} 100%)`,
                }}
            >
                <Iconify icon={icon} sx={{ height: 24, width: 24 }} />
            </IconWrapperStyle>

            <Typography variant="h3">{value}</Typography>

            <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                {title}
            </Typography>
        </Card>
    );
}
