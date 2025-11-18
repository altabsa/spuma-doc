---
sidebar_position: 3
id: przyklad-dokument-pusty
title: Proces dla dokumentu pustego
---

## 1. Utworzenie dokumentu pustego

Dodanie dokumentu pustego rozpoczyna się w ten sam sposób jak dodanie dokumentu z pliku.  

![Dodawanie dokumentu pustego – kroki 1–5](/img/przyklad20_7_3.png)

1. **Wejdź** do sekcji **Sekretariat**.  
2. **Kliknij** przycisk **Nowy**.  
3. W oknie wyboru zaznacz zakładkę **Utwórz dokument**.  
4. **Wybierz szablon** – możesz wybrać dowolny szablon z listy lub utworzyć dokument **bez szablonu**.  
   - W naszym przykładzie wybieramy opcję **Bez szablonu**.  
5. **Kliknij OK**, aby utworzyć dokument.  

**Wynik:** dokument pusty zostaje dodany do listy w **Sekretariacie** i jest gotowy do dalszego uzupełniania.  

## 2. Uzupełnienie danych w zakładce Ogólne

Po utworzeniu dokumentu pustego **otwórz go z listy w Sekretariacie**.  
Ponieważ dokument jest pusty, nie wysyłamy go do OCR – celem jest ręczne stworzenie nowego dokumentu.  

W naszym przykładzie przygotowujemy **zlecenie zakupu**.  

1. **Wybierz typ dokumentu** – z listy rozwijanej wybierz **Zlecenie zakupu** (w przykładzie: *Zlecenie Zakupu 2*).  
2. **Wpisz nazwę dokumentu** – np. *ZZ20250916*.  
3. **Dodaj opis** – np. *„Zlecenie na torby na laptopa”*.  
4. **Wpisz numer dokumentu** – np. *ZZ20250916*.  
5. **Uzupełnij daty**:  
   - **Data dokumentu** – np. *2025-09-16*,  
   - **Wpłynął** – np. *2025-09-16*.  

![Zakładka Ogólne – dokument pusty](/img/przyklad21.png)

**Wynik:** zakładka **Ogólne** została uzupełniona i dokument ma już nadany typ, nazwę, numer oraz daty.  

## 3. Uzupełnienie danych w zakładce Atrybuty

Po uzupełnieniu zakładki **Ogólne** przejdź do zakładki **Atrybuty**.  

1. **Wybierz zamawiającego** – z listy rozwijanej wybierz osobę odpowiedzialną za złożenie zamówienia (w przykładzie: *Jan Ordynacki*).  
2. **Pole Numer SAP** – pozostaw puste.  
   - Numer ten zostanie nadany automatycznie w systemie SAP po zaksięgowaniu dokumentu.  
3. **Wpisz daty**:  
   - **Ważne do** – określ datę, do której zamówienie jest ważne (np. *2025-09-18*),  
   - **Wymagane na** – określ datę, na którą dokument ma zostać zrealizowany (np. *2025-09-19*).  

![Zakładka Atrybuty – dokument pusty](/img/przyklad22.png)

**Wynik:** zakładka **Atrybuty** została uzupełniona – dokument ma przypisanego zamawiającego i określone daty obowiązywania, a pole numeru SAP pozostaje puste do momentu zaksięgowania.  

## 4. Dodanie linii dokumentu

Kolejnym krokiem jest wprowadzenie pozycji do dokumentu.  

1. **Przejdź** do zakładki **Linie**.  
2. **Kliknij ikonę „+”**, aby dodać nową pozycję.  
3. **Wybierz towar** z listy rozwijanej (w przykładzie: *C00014 – Torba na laptopa*).  
4. **Uzupełnij dane pozycji**:  
   - **Kwota netto** – np. *720*,  
   - **Ilość** – np. *3*,  
   - **Uwagi** – np. *„Torby dla nowych pracowników”*.  
5. **Kliknij przycisk „Zapisz”**, aby zatwierdzić dodane linie.  

![Zakładka Linie – dokument pusty](/img/przyklad23.png)

**Wynik:** do dokumentu zostały dodane linie z określonym towarem, ceną i ilością. Dokument jest gotowy do dalszego przetwarzania (obieg, księgowanie).  

## 5. Obieg i autoryzacja

Po uzupełnieniu danych i dodaniu linii możesz wysłać dokument do obiegu.  

1. **Przejdź** do zakładki **Obieg**.  
2. W polu **Schemat** wybierz opcję **Bez autoryzacji**.  
3. **Kliknij przycisk „Wyślij w obieg”**.  

![Zakładka Obieg – bez autoryzacji](/img/przyklad24.png)

**Wynik:** dokument zostaje oznaczony jako Bez autoryzacji i jest gotowy do dalszego przetwarzania (np. księgowania w SAP).  

## 6. Księgowanie w SAP

Ostatnim etapem pracy z dokumentem pustym w SPUMIE jest jego przesłanie do systemu **SAP**.  

1. **Przejdź** do zakładki **Atrybuty**.  
2. **Kliknij przycisk „Zapisz do SAP”**.  
3. System wyświetli komunikat z pytaniem: *„Utworzyć Zlecenie Zakupu w SAP?”*.  
   - Kliknij **Tak**, aby potwierdzić.  

![Zapis do SAP](/img/przyklad25.png)

**Wynik:** dokument zostaje przesłany do SAP i system automatycznie nadaje mu numer, który pojawia się w polu **Numer SAP** w zakładce **Atrybuty**.  

![Numer SAP – uzupełniony automatycznie](/img/przyklad26.png)

---

### Podgląd dokumentu w SAP

W systemie **SAP** dokument jest widoczny jako **Zlecenie zakupu**.  
Aby go sprawdzić:  

1. W SAP przejdź do dokumentu **Zlecenie zakupu**.  
2. Wyszukaj dokument po numerze (np. *5*).  
3. Otwórz szczegóły, aby zobaczyć wszystkie dane – towary, ilości, wartości i daty.  

![Zlecenie zakupu w SAP](/img/przyklad27.png)

**Wynik:** dokument pusty przeszedł cały proces – od utworzenia w SPUMIE, przez ręczne uzupełnienie danych i dodanie linii, aż po utworzenie odpowiadającego mu **Zlecenia zakupu** w SAP.  
## 7. Repozytorium – dokument końcowy

Po zakończonym obiegu i zapisaniu dokumentu do SAP, trafia on również do odpowiedniego katalogu w **Repozytorium**.  

- Dokument można odszukać korzystając z wyszukiwarki lub przechodząc bezpośrednio do katalogu, w którym został zapisany.  
- Dostęp mają wyłącznie osoby z odpowiednimi **uprawnieniami** do repozytorium.  
- Dokument w repozytorium można przeglądać, kopiować dane, drukować lub wykorzystać w raportach.  

**Wynik:** dokument pusty przeszedł cały proces – od utworzenia w SPUMIE, przez ręczne uzupełnienie danych i dodanie linii, aż po zapis w repozytorium oraz utworzenie odpowiadającego mu **Zlecenia zakupu** w SAP.  
