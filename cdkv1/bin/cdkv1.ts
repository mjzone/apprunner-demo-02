#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { Cdkv1Stack } from '../lib/cdkv1-stack';

const app = new cdk.App();
new Cdkv1Stack(app, 'Cdkv1Stack');
