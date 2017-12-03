interface Page {
  title: string;
  component: any;
  icon: string;
  index?: number;
  tabComponent?: any;
}

interface MenuGroup extends Page {
  items?: Page[];
}
