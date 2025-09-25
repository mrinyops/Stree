import { View as RNView, type ViewProps as RNViewProps } from 'react-native';

export interface Props extends RNViewProps {
  className?: string;
}

export const View = ({ className, ...props }: Props) => {
  return <RNView className={className} {...props} />;
};
