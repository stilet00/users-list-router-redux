export function useTodosForm() {
  const validate = (values) => {
    const errors = {};
    if (!values.title.trim()) {
      errors.title = "Title is required";
    } else if (values.title.length > 100) {
      errors.title = "Length is too long";
    }
    return errors;
  };
  return {
    validate,
  };
}
