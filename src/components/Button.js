const defaultClass = "py-1 px-4";

const primary = (props) => {
  return (
    <button
      className={`${defaultClass} ${
        props.className && props.className
      }rounded bg-blue-600`}
    >
      {props.children}
    </button>
  );
};
const danger = (props) => {
  return (
    <button
      className={`${defaultClass} ${
        props.className && props.className
      }rounded bg-red-600`}
    >
      {props.children}
    </button>
  );
};
const success = (props) => {
  return (
    <button
      className={`${defaultClass} ${
        props.className && props.className
      }rounded bg-green-600`}
    >
      {props.children}
    </button>
  );
};
const secondary = (props) => {
  return (
    <button
      className={`${defaultClass} ${
        props.className && props.className
      }rounded bg-gray-800`}
    >
      {props.children}
    </button>
  );
};
const custom = (props) => {
  return (
    <button
      type="submit"
      className={`${defaultClass} ${
        props.className && props.className
      } font-semibold rounded-xl bg-gradient-to-r from-green-200 to-green-300 hover:from-green-400 hover:to-green-500 hover:text-white transition-all duration-200`}
    >
      {props.children}
    </button>
  );
};
const signUp = (props) => {
  return (
    <button
      type="submit"
      className={`${defaultClass} ${
        props.className && props.className
      } font-semibold rounded-xl inline-block border-2 border-red-500 text-red-500 focus:ring ring-red-300 hover:bg-red-500 hover:text-white transition-all duration-200`}
    >
      {props.children}
    </button>
  );
};

const pakaton = (props) => {
  return (
    <button
      type="submit"
      className={`${defaultClass} ${
        props.className && props.className
      } py-2 font-semibold rounded-xl inline-block bg-red-500 text-red-100 focus:ring ring-red-300 hover:bg-red-600 hover:text-white transition-all duration-200`}
    >
      {props.children}
    </button>
  );
};

export { primary, danger, success, secondary, custom, signUp, pakaton };
