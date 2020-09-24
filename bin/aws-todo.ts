#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { AwsTodoStack } from '../lib/aws-todo-stack';

const app = new cdk.App();
new AwsTodoStack(app, 'AwsTodoStack');
