interface HandleInputFocusParams {
  selector: string;
}

const handleInputFocus = ({ selector }: HandleInputFocusParams) => {
  setTimeout(() => {
    const input = document.querySelector(selector) as HTMLInputElement;
    if (input) {
      input.focus();
    }
  }, 0);
};

export default handleInputFocus;
