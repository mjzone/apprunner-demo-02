import * as cdk from "@aws-cdk/core";
// import * as apprunner from "@aws-cdk/aws-apprunner";
// import { HealthCheckConfigurationProperty } from '@aws-cdk/aws-apprunner'
import { CfnService } from '@aws-cdk/aws-apprunner'

export class Cdkv1Stack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CfnService(this, "CfnService", {
      serviceName: "my-app",
      sourceConfiguration: {
        authenticationConfiguration: {
          connectionArn: "arn:aws:apprunner:us-east-1:885121665536:connection/myGithubConnector/62d6d238275741019fade5ade59e3e0c"
        },
        autoDeploymentsEnabled: true,
        codeRepository: {
          repositoryUrl: "https://github.com/mjzone/apprunner-demo-02",
          sourceCodeVersion: {
            type: "BRANCH",
            value: "main"
          },
          codeConfiguration: {
            configurationSource: "REPOSITORY"
          }
        }
      },
      healthCheckConfiguration: {
        path: "/health"
      }
    })

    // new apprunner.Service(this, "Service", {
    //   source: apprunner.Source.fromGitHub({
    //     repositoryUrl: "https://github.com/mjzone/apprunner-demo-02",
    //     branch: "main",
    //     configurationSource: apprunner.ConfigurationSourceType.REPOSITORY,
    //     connection: apprunner.GitHubConnection.fromConnectionArn(
    //       "arn:aws:apprunner:us-east-1:885121665536:connection/myGithubConnector/62d6d238275741019fade5ade59e3e0c"
    //     ),
    //   }),
    // });
  }
}
