export function updateData(data) {
  return { type: 'UPDATE_DATA', payload: data };
}

export function deleteItem(data) {
  return { type: 'DELETE_ITEM', payload: data };
}
