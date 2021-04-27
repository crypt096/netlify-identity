exports.handler = async () => {
  console.log("function run");

  const data = {
    name: "Mario",
    age: 25,
  };

  //   Return res to browser
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
