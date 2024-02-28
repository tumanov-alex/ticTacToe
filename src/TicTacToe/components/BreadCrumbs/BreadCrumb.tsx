interface BreadCrumbProps {
  content: number;
  onClick: () => void;
}

export const BreadCrumb = ({ onClick, content }: BreadCrumbProps) => (
  <button
    onClick={onClick}
    style={{
      marginRight: 8,
      width: 30,
      height: 30,
      borderRadius: '30%',
      border: '1px solid black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    }}>
    {content + 1}
  </button>
);
