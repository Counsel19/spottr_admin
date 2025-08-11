interface ISubscriptionPlanFeatures {
  id: string;
  subscription_plan_id: string;
  feature: string;
  value: string;
  created_at: string;
  updated_at: string;
}
interface ISubscribersPlan {
  id: string;
  name: string;
  amount: string;
  currency: string;
  image: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  features: ISubscriptionPlanFeatures[];
}

interface ISubscribers {
  id: string;
  user_id: string;
  subscription_plan_id: string;
  transaction_id: string;
  duration_months: number;
  start_date: string;
  end_date: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  user: GenericUser;
  subscription_plan: ISubscribersPlan;
}

interface IGetSubscribersQueryParams {
  search?: string;
  per_page?: string;
  is_active?: string;
  user_id?: string;
  subscription_plan_id?: string;
}

interface IUpdateSubscriptionPlan {
  name: string;
  amount: string;
  id: string;
}
interface IUpdateSubscriptionPlanImage {
  data: FormData;
  id: string;
}
interface IAddSubscriptionPlanFeature {
  feature: string;
  value: string;
  id: string;
}
interface IRemoveSubscriptionPlanFeature {
  featureId: string;
  id: string;
}
