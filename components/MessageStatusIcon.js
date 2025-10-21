import { MaterialIcons } from '@expo/vector-icons';

export default function MessageStatusIcon({ status, size, color }) {
  switch (status) {
    case 'pending':
      return (
        <MaterialIcons
          name="access-time"
          size={size || 14}
          color={color || 'grey'}
        />
      );
    case 'sent':
      return (
        <MaterialIcons name="check" size={size || 14} color={color || 'grey'} />
      );
    case 'delivered':
      return (
        <MaterialIcons
          name="done-all"
          size={size || 14}
          color={color || 'grey'}
        />
      );
    case 'read':
      return (
        <MaterialIcons
          name="done-all"
          size={size || 14}
          color={color || '#34B7F1'}
        />
      );
    case 'failed':
      return (
        <MaterialIcons
          name="error-outline"
          size={size || 14}
          color={color || 'grey'}
        />
      );
    default:
      return null;
  }
}
