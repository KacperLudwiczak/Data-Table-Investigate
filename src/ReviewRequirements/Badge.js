import * as React from "react";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";

export default function BadgeMax() {
  return (
    <Stack spacing={4} direction="row" sx={{ color: "action.active" }}>
      <Badge color="secondary" badgeContent={99}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={100}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={1000} max={999}>
        <MailIcon />
      </Badge>
      <MoreHorizRoundedIcon />
      <MoreVertRoundedIcon />
      <CottageRoundedIcon />
      <ContentCopyRoundedIcon />
    </Stack>
  );
}
