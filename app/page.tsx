export default function SupportPage() {
  return (
    <>
      <Banner />
      <Suspense fallback={<div>Loading support features...</div>}>
        <FeatureTabs />
      </Suspense>
      <SupportTeam />
    </>
  );
}
