import { siteConfig } from "@/lib/site";
import { PageHeader, PrimaryButton, SoftCard } from "@/components/ui";

export default function CouponsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Coupons"
        title="クーポン"
        description="最新のクーポンはホットペッパーに掲載しています。"
        actions={
          <PrimaryButton href={siteConfig.reservationUrl}>
            ホットペッパーでクーポンを見る
          </PrimaryButton>
        }
      />

      <SoftCard className="p-6">
        <p className="text-sm leading-7 text-neutral-700">
          クーポン情報は随時更新されます。最新の内容は予約ページをご確認ください。
        </p>
      </SoftCard>
    </div>
  );
}