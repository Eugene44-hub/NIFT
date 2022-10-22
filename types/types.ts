export type ILayoutProps = {
  children: JSX.Element
}

export interface IFilteredListItem {
  icon: JSX.Element,
  item: string
}
export type IFilteredListItems = IFilteredListItem[]
export interface IProcess {
  image: JSX.Element;
  header: string;
  businessProcess: string;
}

export type businessProcess=IProcess[]