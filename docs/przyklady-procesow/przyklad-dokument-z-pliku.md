---
sidebar_position: 2
id: przyklad-dokument-z-pliku
title: Proces dla dokumentu z pliku
---

## 1. Dodanie dokumentu z pliku

![Dodawanie z pliku – kroki 1–6](/img/przyklad1.png)

1. **Wejdź** do sekcji **Sekretariat**.
2. **Kliknij** przycisk **Nowy**. Otworzy się okno dodawania w trybie **Wybór plików**.
3. **Sprawdź** przełącznik **OCR** – włącz, jeśli chcesz rozpoznać treść już teraz. (OCR możesz uruchomić także później; zobacz: [OCR](../przetwarzanie-pojedynczego-dokumentu/OCR.md)).
4. **Kliknij** ikonę **+** , aby dodać plik z komputera.
5. W oknie systemowym **Wybierz** plik i **kliknij Otwórz**.
6. Po pojawieniu się pliku na liście **kliknij OK**, aby rozpocząć dodawanie.

**Wynik:** plik zostaje przesłany do SPUMY i po przetworzeniu pojawia się na liście w **Sekretariacie**.

## 2. Oczekiwanie na przetwarzanie OCR  
 
Na początku jego status oznaczony jest ikoną klepsydry – dokument oczekuje na przetworzenie przez OCR.  

![Status OCR – w trakcie](/img/przyklad2.png)  

1. Po chwili **kliknij przycisk Odśwież**, aby sprawdzić, czy OCR zakończył działanie.  

Gdy przetwarzanie się zakończy:  
- system automatycznie przypisze **klasę dokumentu** (np. faktura kosztowa),  
- nada mu **nazwę**,  
- zmieni status na przetworzony.  

![Status OCR – zakończony](/img/przyklad3.png)  


## 3. Ponowne wysłanie do OCR  

Po dodaniu dokumentu możesz uruchomić ponownie OCR, aby upewnić się, że system poprawnie rozpoznał wszystkie dane.  

1. **Otwórz** dokument z listy w **Sekretariacie** – kliknij na jego nazwę.  
2. W prawym górnym rogu **kliknij ikonę menu operacji** (trzy kreski).  
3. Z rozwijanego menu **wybierz opcję „Wyślij do OCR”**.  
4. Poczekaj, aż system zakończy rozpoznawanie treści.  

![Ponowne wysłanie do OCR](/img/przyklad6.png)  

**Wynik:** **pola** i **tabela** z zakładki **OCR** oraz zakładki **Ogólne** i **Atrybuty** zostają automatycznie uzupełnione na podstawie odczytu OCR.  


## 4. Uzupełnienie danych w zakładce **Ogólne**

Zakładka **Ogólne** zawiera podstawowe informacje o dokumencie.  

1. **Sprawdź typ dokumentu** – system (OCR) przypisał klasę **Faktura kosztowa**.  
   - Jeśli jest poprawna, pozostaw bez zmian.  
   - Jeśli nie – **wybierz właściwy typ** z listy.  

2. **Sprawdź nazwę dokumentu** – została nadana automatycznie (np. *FVZ_VAT328_43*).  
   - Możesz ją pozostawić lub **zmienić**, aby była bardziej czytelna.  

3. **Wpisz opis** – dodaj informację, np. *„Faktura za zakup tonerów – PCT Kwant”*.  

4. **Wpisz numer faktury** – przepisz numer z dokumentu (np. *VAT328*).  
   - Numer może zostać także automatycznie rozpoznany przez **OCR** – w tym przykładzie został odczytany poprawnie.  
   - Zapisany numer jest używany w systemie jako **referencja dostawcy/odbiorcy** i przekazywany do **SAP**.  

5. **Zweryfikuj daty**:  
   - **Data dokumentu** (np. *2023-09-09*),  
   - **Wpłynął** (np. *2025-09-16*).  

   Jeśli daty są niepoprawne – **wpisz właściwe** lub **wybierz z kalendarza**.  
   - W naszym przykładzie system błędnie odczytał rok w polu **Data dokumentu**.  
   - Popraw datę na **2025-09-09**, zgodnie z treścią faktury.  

6. **Sprawdź dane uzupełnione automatycznie**:  
   - **Data utworzenia**,  
   - **Firma**,  
   - **Właściciel**,  
   - **Katalog**,  
   - **Unikatowy identyfikator**.  

   Tych pól nie trzeba zmieniać.  

Przykład poprawnie uzupełnionej zakładki Ogólne.

![Zakładka Ogólne – poprawnie uzupełniona](/img/przyklad7.png)

## 5. Uzupełnienie danych w zakładce Atrybuty

Zakładka **Atrybuty** zawiera szczegółowe informacje powiązane z klasą dokumentu.  
Pola mogą się różnić w zależności od wybranego typu dokumentu. W przypadku **faktury kosztowej** uzupełnij następujące dane (mogą się różnić w zależności od wdrożenia):  

1. **Partner handlowy** – system może odczytać kontrahenta automatycznie na podstawie OCR.  
   - W naszym przypadku rozpoznał błędnie nabywcę zamiast dostawcy, dlatego musimy go wybrać ręcznie.  
   - **Kliknij** ikonę podwójnego kwadracika obok pola **Partner handlowy**.  
   - W oknie wyszukiwania wpisz fragment nazwy lub kod kontrahenta (np. *PCT*).  
   - **Kliknij ikonę lupy**, aby uruchomić wyszukiwanie.  
   - Na liście wyników znajdź właściwego kontrahenta i **kliknij**, aby go wybrać. 

    ![Wybór partnera handlowego](/img/przyklad8.png)

3. **Data płatności** – w naszym przykładzie uzupełniła się poprawnie na podstawie OCR, nie trzeba jej zmieniać.  

4. **Dokument bazowy** – w tym przypadku pomijamy, nie wybieramy żadnego.  

5. **Wartość brutto i netto** – system przeniósł kwoty z OCR i są zgodne z fakturą, nie trzeba ich poprawiać.  

6. **Zdefiniuj koszt wg** – zaznacz właściwą opcję (**Netto**).  

7. **Metoda płatności** – OCR nie uzupełnił tego pola.  
   - **Wybierz z listy** wartość *PD30*, zgodnie z warunkami płatności z faktury.  

Przykład poprawnie uzupełnionej zakładki Atrybuty.

![Zakładka Atrybuty – poprawnie uzupełniona](/img/przyklad9.png)

## 6. Dodanie linii dokumentu
Zakładka **Linie** zawiera szczegółowe pozycje faktury (np. towary lub usługi).  
Najwygodniej jest je przenieść bezpośrednio z rozpoznanej tabeli OCR.  

---

### 6.1 Kopiowanie linii z OCR

1. **Przejdź** do zakładki **OCR** i wybierz widok **Tabela**.  
2. **Sprawdź**, czy system poprawnie rozpoznał wszystkie pozycje faktury.  
   - W naszym przykładzie OCR rozpoznał linię: *J.B. Officeprint 1420*.  
3. **Zaznacz** linie, które chcesz przenieść do dokumentu.  
4. W prawym górnym rogu **kliknij menu operacji** (trzy kreski).  
5. **Wybierz opcję „Kopiuj do linii”**.
6. Wybierz grupowanie **Nie grupować**.

![Kopiowanie linii z OCR](/img/przyklad10.png)

**Wynik:** linie z OCR zostają przeniesione do zakładki **Linie**.  

---

### 6.2 Uzupełnianie danych w zakładce Linie

1. **Przejdź** do zakładki **Linie**.  
2. **Upewnij się**, że wybrane pozycje zostały przeniesione – w naszym przypadku system uzupełnił jedynie kwotę (np. *1120.00*).  
3. **Wybierz kod towaru** – działa to tak samo jak przy wyborze partnera handlowego:  
   - **Kliknij** ikonę podwójnego kwadracika obok pola **Towar**,  
   - **Wyszukaj** odpowiednią pozycję wpisując fragment nazwy lub kod,  
   - **Wybierz** z listy wyników.  
4. (Opcjonalnie) **Uzupełnij inne pola**, jeśli są wymagane, np. **Projekt**.  
   - W naszym przykładzie pomijamy dodatkowe uzupełnienia.  
5. **Kliknij przycisk „Zapisz”** w prawym górnym rogu.  

![Zakładka Linie – uzupełnianie danych](/img/przyklad11.png)

Przykład poprawnie uzupełnionej linii.

![Zakładka Linie – linia uzupełniona](/img/przyklad12.png)

## 7. Obieg i autoryzacja

Zakładka **Obieg** służy do przesyłania dokumentów w procesie autoryzacji.  

---

### 7.1 Wybór schematu i wysyłanie w obieg

1. **Przejdź** do zakładki **Obieg**.  
2. Z listy **Schemat** wybierz **OTWARTY**.  
3. **Kliknij przycisk „Wyślij w obieg”**.  

![Wybór schematu otwartego](/img/przyklad13.png)

**Wynik:** dokument trafia do pierwszej osoby wskazanej w procesie – w naszym przykładzie jest to **Ewa Start**.  

---

### 7.2 Zatwierdzenie dokumentu przez Ewę

1. **Ewa** otwiera dokument i klika **Zatwierdź**.  
2. W schemacie **Otwarty** należy wskazać kolejnego użytkownika:  
   - Z listy wybiera **Adama Winien**,  
   - Może wpisać dodatkowe **uwagi**, ale w tym przypadku pozostawia pole puste.  
3. Kliknij **Zatwierdź**.  

![Okno zatwierdzania](/img/przyklad14.png)

⚠️ Po kliknięciu **Zatwierdź** dokument jest oznaczony jako wstępnie przetworzony – aby decyzja została zapisana w systemie, należy jeszcze kliknąć **Zapisz** w prawym górnym rogu.  

---

### 7.3 Wysłanie dodatkowej wiadomości

Aby przyspieszyć akceptację, Ewa wysyła do Adama wiadomość z linkiem do dokumentu:  

1. **Kliknij ikonę „+”** w panelu wiadomości.  
2. **Wybierz użytkownika** – Adama.  
3. **Wpisz treść wiadomości**, np. „Hej, proszę zatwierdź dokument FVZ_VAT328_44. Pilne!!!”.  
4. **Wklej link do dokumentu** (pobrany wcześniej z menu operacji).  
5. **Kliknij Wyślij**.  

![Wysyłanie wiadomości do użytkownika](/img/przyklad15.png)

---

### 7.4 Zatwierdzenie dokumentu przez Adama

1. Adam otrzymuje wiadomość, klika w link i otwiera dokument.  
2. W zakładce **Obieg** klika **Zatwierdź**.  
3. Po zatwierdzeniu odpisuje Ewie w czacie, że dokument został zaakceptowany.  

![Dokument zatwierdzony – schemat obiegu i czat](/img/przyklad16.png)

---

**Wynik:** dokument został zatwierdzony w schemacie **Otwarty** – w obiegu widnieją oba kroki (Ewa i Adam), a w panelu wiadomości widać potwierdzenie od Adama.  

## 8. Księgowanie w SAP

## 8. Repozytorium – dokument końcowy
