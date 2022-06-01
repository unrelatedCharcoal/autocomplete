const completionSpec: Fig.Spec = {
  name: "telepresence",
  description: "D",
  subcommands: [
    {
      name: "loglevel",
      description:
        "Temporarily change the log-level of the traffic-manager, traffic-agent, and user and root daemons",
      subcommands: [
        {
          name: "error",
        },
        {
          name: "warning",
        },
        {
          name: "info",
        },
        {
          name: "debug",
        },
        {
          name: "trace",
        },
      ],
    },
    {
      name: "gather-logs ",
      description:
        "Gather logs from traffic-manager, traffic-agent, user and root daemons, and export them into a zip file",
      options: [
        {
          name: ["-a", "--anonymize"],
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "To anonymize pod names + namespaces from the logs",
    },
  ],
  // Only uncomment if example takes an argument
  // args: {}
};
export default completionSpec; //
