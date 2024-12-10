
interface Props {
    file: string,
    index: number
}

const HistoryPdf = ({file, index}: Props) => {
  return (
      <li>
           <a href={file} target="_blank" rel="noopener noreferrer">
                PDF #{index + 1}
            </a>
    </li>
  )
}

export default HistoryPdf