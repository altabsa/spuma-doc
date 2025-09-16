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

**Wynik:** pola i tabela z zakładki OCR oraz zakładki **Ogólne** i **Atrybuty** zostają automatycznie uzupełnione na podstawie odczytu OCR.  


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

Przykład poprawnie uzupełnionej zakładki Atrybuty

![Zakładka Atrybuty – poprawnie uzupełniona](/img/przyklad9.png)

## 6. Dodanie linii dokumentu

## 7. Obieg i autoryzacja

## 8. Księgowanie w SAP

## 8. Repozytorium – dokument końcowy
