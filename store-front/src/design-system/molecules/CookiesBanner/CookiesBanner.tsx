import * as React from 'react'
import styled from '@emotion/styled'
import { Grid, Paper, useMediaQuery, useTheme } from '@mui/material'
import { CustomButton } from '../../atoms/Button'
import { Typography } from '../../atoms/Typography'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Theme } from '@mui/material'
import FlexSpacer from '../../atoms/FlexSpacer'

interface StyledPaperProps {
    backgroundColor?: string
}

export interface CookiesBannerProps {
    theme?: Theme
    /**
     * Title for the Cookies
     */
    title?: string
    /**
     * text for the banner
     */
    text?: string
    /**
     * checkboxes for the cookies
     */
    standard?: { [name: string]: boolean }
    /**
     * the fields used to generate the checkbox options
     */
    handleClose?: (title: string) => void | Promise<void>
}

const StyledLink = styled(Link)<{ theme?: Theme }>`
    color: inherit;
    text-decoration: none;
    font-family: inherit;
    display: inline;
    text-decoration: underline;
`
const StyledPaper = styled(Paper)<StyledPaperProps>`
    background-color: #ccc;
    border-radius: 0.25rem;
    color: #fff;
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    box-shadow: 0 -4px 6px -2px rgba(9, 9, 9, 0.2);
`

const StyledGrid = styled(Grid)<{ isMobile: boolean }>`
    justify-content: ${({ isMobile }) => (isMobile ? 'center' : 'flex-start')};
    align-items: center;

    > * {
        width: fit-content;
        &:not(:last-child) {
            margin-right: ${({ isMobile }) => (isMobile ? 'initial' : '2rem')};
        }

        &:not(:first-child) {
            margin-bottom: ${({ isMobile }) =>
                isMobile ? '1.5rem' : 'initial'};
        }
    }
`

const defaultCookies = {
    necessary: true,
    preferences: false,
    statistics: false,
    marketing: false,
}

const fullCookies = {
    necessary: true,
    preferences: true,
    statistics: true,
    marketing: true,
}

export const CookiesBanner: React.FC<CookiesBannerProps> = ({
    title = 'Privacy Policy',
    standard = defaultCookies,
    handleClose,
}) => {
    const theme = useTheme()
    const { t } = useTranslation(['translation'])

    const { primary } = theme.palette
    const isMobile = useMediaQuery('(max-width:600px)')
    const isDesktop = useMediaQuery('(min-width:1150px)')
    const [cookie, setCookie] = React.useState(standard)
    const addCookie = (cookies: { [name: string]: boolean }) => {
        document.cookie = `user=${JSON.stringify(cookies)}; max-age=8640000;}`
    }

    const handleSubmit = () => {
        addCookie(cookie)
        handleClose && handleClose(title)
    }

    return (
        <StyledPaper elevation={0} backgroundColor={primary.main}>
            <Grid container direction="row" width="100%">
                <Grid
                    item
                    xs={12}
                    container
                    direction={isMobile ? 'column' : 'row'}
                    padding={isMobile ? '1rem' : '3rem 3rem 2rem'}
                    flexGrow={1}
                >
                    <Typography
                        size={isMobile ? 'body' : 'h4'}
                        weight="Light"
                        display="inline"
                        style={{
                            alignSelf: 'center',
                            marginBottom: !isDesktop ? '2rem' : 0,
                            marginRight: isDesktop ? 'auto' : '2rem',
                        }}
                    >
                        {t('cookies.text')}
                        <StyledLink to="/privacy">
                            {t('cookies.link')}
                        </StyledLink>
                        {' .'}
                    </Typography>

                    <CustomButton
                        fullWidth={!!isMobile}
                        variant="text"
                        color="secondary"
                        type="submit"
                        onClick={handleSubmit}
                        label={t('cookies.button')}
                        style={{
                            order: isMobile ? 99 : 0,
                            color: theme.palette.primary.main,
                        }}
                    ></CustomButton>
                </Grid>
            </Grid>
        </StyledPaper>
    )
}
