import { Typography } from "@mui/material"
import { red } from "@mui/material/colors"

interface Props {
  message: string | null
}
const Notify = (props: Props) => {
  if (!props.message) {
    return null
  }
  return <Typography sx={{ color: red }}>{props.message}</Typography>
}

export default Notify
