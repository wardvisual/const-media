const onClickHandler = () => {
  const { click } = {
    click: (setter, state) => {
      setter(state);
    },
  };

  return click;
};

export default onClickHandler;
