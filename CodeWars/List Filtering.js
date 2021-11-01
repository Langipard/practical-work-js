function filter_list(l) {
  let result = l.filter((number) => {
    if (typeof number == "number") return true;
  });
  console.log(result);
}

filter_list([1, 2, "a", "b"]);
filter_list([1, "a", "b", 0, 15]);
filter_list([1, 2, "aasf", "1", "123", 123]);
