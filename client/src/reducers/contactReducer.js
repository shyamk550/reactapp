import { CONTACT_US } from "../actions/types";

export default function contactReducer(state = [], action) {
  switch (action.type) {
    case CONTACT_US:
      return [...state, { ...action.contact }];

    default:
      return state;
  }
}
