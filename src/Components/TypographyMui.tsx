import { Typography } from '@mui/material';

function TypographyMui() {
  return (
    <div>
      <Typography variant="h1">H1 Heading</Typography>
      <Typography variant="h2" component="h1">
        H2 Heading
      </Typography>
      <Typography variant="h3">H3 Heading</Typography>
      {/* gutterBottom is a bottom margin */}
      <Typography variant="h4" gutterBottom>
        H4 Heading
      </Typography>
      <Typography variant="h5">H5 Heading</Typography>
      <Typography variant="h5">H6 Heading</Typography>
      <Typography variant="subtitle1">Subtitle 1 Heading</Typography>
      <Typography variant="subtitle2">Subtitle 2 Heading</Typography>
      {/* Paragraphs */}
      <Typography variant="body1">body 1 text</Typography>
      <Typography variant="body2">body 2 text</Typography>
    </div>
  );
}

export default TypographyMui;
