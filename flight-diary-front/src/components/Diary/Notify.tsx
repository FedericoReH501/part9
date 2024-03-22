interface NotifyProps {
  message: string | null
}

const Notify = (props: NotifyProps) => {
  return (
    <>
      <p>{props.message}</p>
    </>
  )
}

export default Notify
