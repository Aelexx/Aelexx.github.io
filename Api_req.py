from google.analytics.data_v1beta.types import (
DateRange,
Dimension,
Metric,
RunReportRequest,
)
 
def sample_run_report(property_id="409874903"):client = BetaAnalyticsDataClient()
# [END analyticsdata_run_report_initialize]
 
# [START analyticsdata_run_report]
request = RunReportRequest(
property=f"properties/{property_id}",
dimensions=[Dimension(name="city")],
metrics=[Metric(name="activeUsers")],
date_ranges=[DateRange(start_date="2023-10-01", end_date="today")],
)
response = client.run_report(request)
# [END analyticsdata_run_report]
 
# [START analyticsdata_run_report_response]
print("Report result:")
for row in response.rows:print(row.dimension_values[0].value, row.metric_values[0].value)
# [END analyticsdata_run_report_response]
 
# [END analyticsdata_quickstart]
 
if __name__ == "__main__":sample_run_report()