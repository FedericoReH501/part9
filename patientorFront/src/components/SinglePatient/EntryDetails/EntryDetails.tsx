import { Entry } from "../../../types"

interface Props {
  entry: Entry
}

const EntryDetails = (props: Props) => {
  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    )
  }
  switch (props.entry.type) {
    case "HealthCheck":
      return (
        <>
          <p>visited By: {props.entry.specialist}</p>
          <p>health check rate : {props.entry.healthCheckRating}</p>
        </>
      )

    case "Hospital":
      return (
        <>
          <p>visited By: {props.entry.specialist}</p>
          <p>
            discharge on: {props.entry.discharge.date} , cause :
            {props.entry.discharge.criteria}
          </p>
        </>
      )
    case "OccupationalHealthcare":
      return (
        <>
          <p>visited By: {props.entry.specialist}</p>
          <p>Employed by: {props.entry.employerName}</p>
          {props.entry.sickLeave ? (
            <p>
              sickLeave:
              {props.entry.sickLeave?.endDate}
            </p>
          ) : null}
        </>
      )

    default:
      return assertNever(props.entry)
  }
}

export default EntryDetails
