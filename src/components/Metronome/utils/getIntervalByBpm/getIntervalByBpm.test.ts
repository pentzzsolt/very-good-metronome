import { getIntervalByBpm } from "./getIntervalByBpm";

const cases = [
  {
    input: 30,
    output: 2000
  },
  {
    input: 60,
    output: 1000
  },
  {
    input: 76,
    output: 789.4736842105264
  },
  {
    input: 113,
    output: 530.9734513274336
  },
]

test.each(cases)("returns $output for $input BPM", ({ input, output }) => {
  expect(getIntervalByBpm(input)).toEqual(output);
});
