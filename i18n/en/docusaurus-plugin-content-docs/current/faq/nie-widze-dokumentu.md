---
id: nie-widze-dokumentu
title: I Can No Longer See a Document That Was Visible a Moment Ago
---

# I Can No Longer See a Document That Was Visible a Moment Ago

**Reported Issue**

The user reports that a document was visible a moment ago but disappeared after another user approved it. The search returns no results.

---

**Solution**

This is normal system behavior during the authorization flow:

1. After approval, the document **moves to the next stage** and becomes visible to the next group of process participants.
2. The user who had access to the document at the previous stage **no longer sees it on the list**.
3. The document will reappear after the flow is completed, in the appropriate **Repository** directory, provided the user has permission to access it.

---

⚠️ If the document is still not visible after the flow is completed and the user has the required permissions, the problem is usually caused by **incorrect access rights**.  
Once the permissions are corrected, the document becomes visible in the Repository.

---