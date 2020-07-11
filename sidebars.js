module.exports = {
  docs: {
    Introduction: ["overview"],
    Usage: [
      "getting-started",
      "mocks",
      "docker",
      "docker-compose",
      "reference",
      "tips",
    ],
    Examples: [
      {
        type: "category",
        label: "CI Pipelines",
        items: ["examples/bitbucket"],
      },
      {
        type: "category",
        label: "Testing",
        items: ["examples/mdx"],
      },
    ],
  },
};
