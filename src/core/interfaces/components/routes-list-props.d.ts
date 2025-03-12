export interface ICursorPosition {
  top: number;
  left: number;
  width: string | number;
  opacity: number;
  height: number;
}

export interface IRouteItemProps {
  route: IRoutes;
  setPosition: React.Dispatch<React.SetStateAction<ICursorPosition>>;
  insideASheet?: boolean;
}

export interface IRoutesListProps {
  insideASheet?: boolean;
  className?: string;
}
