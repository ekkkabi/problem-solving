from datetime import datetime, timedelta

kst = datetime.utcnow() + timedelta(hours=9)
print(kst.strftime("%Y-%m-%d"))
