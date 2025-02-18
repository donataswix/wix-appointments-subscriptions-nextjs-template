import { WixSession } from '../auth/auth';
import type { plans } from '@wix/pricing-plans';

export const getPaidPlans = (
  wixSession: WixSession,
  { limit = 100, planIds = undefined as string[] | undefined } = {}
): Promise<plans.PlansQueryResult> =>
  wixSession!.wixClient!.plans.queryPublicPlans().find();
