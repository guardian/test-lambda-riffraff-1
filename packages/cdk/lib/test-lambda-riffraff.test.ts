import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { TestTypescriptLambda } from './test-lambda-riffraff';

describe('The TestTypescriptLambda stack', () => {
	it('matches the snapshot', () => {
		const app = new App();
		const stack = new TestTypescriptLambda(app, 'TestTypescriptLambda', {
			stack: 'playground',
			stage: 'TEST',
			env: {
				region: 'eu-west-1',
			},
		});
		const template = Template.fromStack(stack);

		/**
		 * Snapshot testing helps to understand exactly what impact a CDK change will have on the provisioned infrastructure.
		 *
		 * @see https://github.com/guardian/cdk/blob/main/docs/best-practices.md#snapshot-testing
		 */
		expect(template.toJSON()).toMatchSnapshot();
	});
});
