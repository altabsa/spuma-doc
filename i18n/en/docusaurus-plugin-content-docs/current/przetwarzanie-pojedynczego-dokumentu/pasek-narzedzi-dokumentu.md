---
sidebar_position: 2
id: pasek-narzedzi-dokumentu
title: Document Toolbar
---

# Document Toolbar

The toolbar is located above the document preview and contains a set of icons used to manage the displayed file and perform additional operations.

| Icon | Element name | Description |
|-------|----------------|------|
| ![Zoom out](/img/dok_pomniejsz.png) | **Zoom out** | Click to reduce the document view. |
| ![Zoom in](/img/dok_powieksz.png) | **Zoom in** | Click to enlarge the document view. |
| ![Resize](/img/dok_dopasuj.png) | **Resize** | Click to fit the document to the width or height of the preview window. |
| ![Rotate](/img/dok_obroc.png) | **Rotate** | Click to rotate the document page by 90 degrees. |
| ![Document pages](/img/dok_strony.png) | **Page number** | Enter the page number you want to display. |
| ![Operations menu](/img/dok_menu.png) | **Operations menu** | Click to expand the list of additional options and operations available for the document. |

## Operations Menu

After clicking the ![Operations menu](/img/dok_menu.png) icon, a list of additional functions available for a single document is displayed.

### Link to Document

This option allows you to copy a link to the document.

- Click **Link to document**.
- The message *Document link copied* is displayed.
- Paste the link, for example, into a SPUMA message.

⚠️ The link works **only inside the SPUMA application**.

---

### New Comment

Allows you to add a comment to a selected area of the document.

- Click **New comment**.
- Select the area of the document where you want to add the comment.

![Select area](/img/kom1_en.png)

- Enter the messaget and save it.

![Enter content and save](/img/kom2_en.png)

The comment is marked with the user's initials.

![Comment marked with initials](/img/kom3_en.png)

Comment visibility can be enabled or disabled using the **Comments** option in the menu.

#### Working with Comments

- Click a comment to open its preview in a yellow field.

![Comment preview](/img/kom4_en.png)

- Click the **minus** icon in the top-right corner of the field to hide the comment.

![Closing a comment](/img/kom5_en.png)

- Click the comment content to open a detailed window containing the full entry and the date it was added.

![Detailed comment preview](/img/kom6_en.png)

In this window, you can add content or modify the existing comment:

- If you **do not save the document** and enter new content, the previous entry is **overwritten**.
- If you **save the document** and open the comment again, any additional content is added as a **new entry** in the comment history.

![Detailed comment preview](/img/kom9_en.png)

---

### Edit pages

This option expands additional functions related to document page management.

![Edit pages](/img/edycja_en.png)

Three operations are available:

- **Cut page** – removes the selected document page (works **only in SPUMA**).
- **Paste page** – pastes a previously cut page (works **only in SPUMA**). This can be used, for example, to change the page order.
- **Import from file** – imports new pages from a file stored on the computer. This can be used, for example, to add missing scan pages.

---

### OCR Regions

This option is available **only when the document has been sent to OCR**.

1. Click the option to highlight all recognized regions in the document preview in yellow.

![OCR Regions](/img/RegionyOCR.png)

OCR Regions can also be used to **search** for documents.  
Only basic data, such as the name and dates, is stored in the document description, while additional recognized values may be available in the regions.

Example:

1. Enter the phrase "coffee" in the search field.
2. The system finds invoices where OCR recognized this word in the document content.

OCR Regions can also be used to quickly **copy recognized data** and paste it elsewhere, for example into Notepad, a system document, or Word.

1. **Press and hold Ctrl** on the keyboard.
2. **Select an area with the mouse** from which you want to copy data.
3. **Release the selection** – the system automatically copies the content to the clipboard.  
   A confirmation message is displayed on the screen.

![OCR Regions - copying](/img/RegionyOCR2_en.png)

4. **Go to the location** where you want to paste the copied data.
5. **Paste** it using Ctrl+V.

---

### Comments

This option allows you to enable or disable comment visibility.

- Click to enable comments – when the option is selected (✓), comments are visible.
- Click again to disable them – when the option is cleared, comments are hidden.

---

### Favorites

This option allows you to add or remove the document from the **Favorites** list.

- Click to add the document to Favorites – when the option is selected (✓), the document is included in Favorites.
- Click again to remove the document from the list – when the option is cleared, the document is not included in Favorites.

---

### Download

Allows you to download the document in its current form to your computer.

---

### Update Content

This option allows you to **replace the document source file with a new file**. The function is available only when the document **has not yet been processed by OCR**. After replacement, the new file replaces the previous version in the system while preserving the document metadata and current settings.

- Click to update the content.
- Select a file from your computer and open it.

---

### Print

Allows you to print the document directly from the application.

- Click to print the document.
- Select the print options. A preview is available.

![Print options](/img/Opcje_wydruku_7.8_en.png)

  + **Range from-to** – prints selected pages.
  + **Lines** – adds lines.
  + **One page** – prints lines and authorization on one page.
  + **Print authorization** – adds the authorization workflow.
  + **Attachments** – adds the attachment list.

- Click **Download documents** if you want to print. The document opens as a PDF in a new tab and can then be printed.
- Click **Close** to cancel printing.

---

### Send to OCR

This option sends the document to OCR for content recognition.

1. Click **Send to OCR**.
2. The **Resend to OCR** window is displayed.
3. In the **Engine** field, select the processing method.

![OCR mechanism](/img/ponOCR_en.png)

4. Click **OK** to start processing.
5. After a moment, **open the document again**.

After reopening:

- New data recognized by the system appears in the **OCR** tab.
- In the top-right corner, information about the selected mechanism is displayed, e.g. "GPT".
- You can enable **OCR Regions** to highlight recognized areas of the document in yellow.

![OCR](/img/ponOCR2_en.png)

⚠️ If the data does not appear immediately, open the document again.

---

### Save as Template

This option allows you to save the document as a template that can later be used when creating new documents.

:::note
The **Save as template** option is available only to users with the administrator role.
:::

To save a document as a template:

1. Click **Save as template**.
2. Enter the template name.
3. Click **OK**.

The saved template is available when using the [**Create document**](../Sekretariat/dodawanie-dokumentow#create-document) function. This eliminates the need to import the same document again.

---

### Daily Correspondence

This option allows you to check whether the document is linked to an entry in **Daily correspondence**.

- If the option is **grayed out**, the document **is not linked** to Daily correspondence.
- If the option is **active**, click it to go directly to the entry and view its details.

![Daily correspondence in the document menu](/img/dziennkik_dok_en.png)

---
### Advice

This option allows you to check the Advice status of the document and quickly open the details of the related entry.

- **Grayed-out option** – the document has no assigned Advice entry and has not been marked as unassigned.

![No Advice](/img/awizacja6_en.png)

- **Entry starting with "advice - ..."** – the document has an assigned Advice entry. Click the entry to open its details.

![Assigned Advice](/img/awizacja7_en.png)

- **Entry starting with "report - ..."** – the document has been added to the **Unassigned Documents** report.

![Added to the Unassigned Documents report](/img/awizacja8_en.png)

- **Two entries starting with "report - ..." and "advice - ..."** – the document was first added to the **Unassigned Documents** report and then an Advice entry was created for it.  
  Click the entry starting with **advice** to open the Advice details.

![Report and Advice](/img/awizacja9_en.png)

---
### Modifications History

This option allows you to check which modifications were made to the document, e.g. changes to the class, name, schema, or authorization type.

- Click **Modifications History** to open the list of all saved modifications.

![Modifications History](/img/historia_en.png)

- The list on the left contains changes together with the date, time, and user who made them.
- Click a selected change to view its details.

The table on the right contains:

- **Field** – name of the modified element,
- **Old value** – value before the change,
- **New value** – current value after the change.

- Click **Preview before changes** to open the document version from before the modifications were made.
- Click **Close** to exit the Change History view.

---

### Delete

This option allows you to delete the document from the system.

- If the document is in **Secretary**, it is permanently deleted from the document list.
- If the document is outside **Secretary**, it is moved to Trash.

A document moved to Trash can be restored by an administrator from the administration application.

---