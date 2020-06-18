export const changeType = (types, index, action) => {
  const newIndex = (index + 1) >= Object.keys(types).length ? 0 : index + 1
  action(newIndex)
}
