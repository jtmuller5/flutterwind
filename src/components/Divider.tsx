export function Divider({ horizontal }: { horizontal?: boolean }) {
    if (horizontal) {
      return <div className="divider divider-horizontal"></div>;
    } else {
      return <div className="divider divider-vertical"></div>;
    }
  }