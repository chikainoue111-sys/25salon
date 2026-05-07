import { siteConfig } from "@/lib/site";
import { GlassCard, PageHeader, PrimaryButton } from "@/components/ui";

export default function CouponsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Coupons"
        title="クーポン"
        description="クーポンはホットペッパービューティーに掲載しています。最新の内容はこちらからご確認ください。"
        actions={<PrimaryButton href={siteConfig.reservationUrl}>クーポンを見る／予約する</PrimaryButton>}
      />

      <GlassCard className="p-6">
        <p className="text-sm leading-7 text-neutral-700">
          迷ったら「相談して決めたい」系のクーポンを選ぶのがおすすめ。来店時に悩みを聞いて最適な内容に調整できます。
        </p>
      </GlassCard>
    </div>
  );
}