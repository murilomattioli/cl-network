import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
// import { ButtonIcons } from ".";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export const BUTTON_HEIGHT = { 
  default: 33,
  icon: 30
};

export const BUTTON_WIDTH = { 
  default: 111,
  icon: 30
};

export const DEFAULT_ICONS: Record<string, IconDefinition> = {
  'edit': faEdit,
  'trash': faTrash,
  'signOutAlt': faSignOutAlt
};
