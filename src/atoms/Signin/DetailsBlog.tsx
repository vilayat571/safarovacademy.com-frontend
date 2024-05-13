interface IProps {
  contentTime: any;
  contentDate: any;
}

function DetailsBlog(props:IProps) {
  return `${props.contentDate} & ${props.contentTime} minutes read`;
}

export default DetailsBlog;
