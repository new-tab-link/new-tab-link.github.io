import Link from "next/link";
import Stack from '@mui/material/Stack';
import { Box } from "@mui/system";
import { Menu } from "@mui/material";
export default function About() {
  return (
    <>
    <Stack><Box>hello</Box></Stack>
      <h1>About</h1>
      <div>
        Back to <Link href="/">Home</Link>
      </div>
    </>
  );
}
