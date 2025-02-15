import { Box, Container, Link, Typography, styled } from '@mui/material';

const FooterWrapper = styled(Container)(
  ({ theme }) => `
        margin-top: ${theme.spacing(4)};
`
);

function Footer() {
  return (
    <FooterWrapper className="footer-wrapper">
      <Box
        pb={4}
        display={{ xs: 'block', md: 'flex' }}
        alignItems="center"
        textAlign={{ xs: 'center', md: 'left' }}
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="subtitle1">ENGLISH CENTER</Typography>
        </Box>
        <Typography
          sx={{
            pt: { xs: 2, md: 0 }
          }}
          variant="subtitle1"
        >
          dev:
          <Link
            href="https://www.facebook.com/profile.php?id=100007900636447"
            target="_blank"
            rel="noopener noreferrer"
          >
            Văn Hoàng Phúc
          </Link>
        </Typography>
      </Box>
    </FooterWrapper>
  );
}

export default Footer;
