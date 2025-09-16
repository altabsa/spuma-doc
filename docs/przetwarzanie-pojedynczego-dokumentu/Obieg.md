---
sidebar_position: 5
id: Obieg
title: Obieg
---

# Obieg dokumentu  

Zakładka **Obieg** służy do przesyłania dokumentów w procesie autoryzacji.  
To tutaj wybierasz schemat, wysyłasz dokument w obieg, a także możesz go zatwierdzić, odrzucić lub – w określonych przypadkach – zmienić przebieg.  

---

## Wysyłanie dokumentu w obieg  

**1. Wybierz schemat autoryzacji** z listy rozwijanej.  
   ![Wybór schematu](/img/obieg1.png)  

**2. Wyślij dokument w obieg** – możesz to zrobić na dwa sposoby:  
   - Kliknij przycisk **Wyślij w obieg** po lewej stronie,  
   - lub kliknij ikonę **menu operacji** (trzy kreski) i wybierz opcję **Wyślij w obieg**.  

   ![Wyślij w obieg](/img/obieg.png)  

---

## Wybór schematu  

Podczas wysyłania dokumentu możesz wybrać jeden z dostępnych schematów autoryzacji:  

- **Bez autoryzacji** – dokument nie wymaga zatwierdzeń, trafia bezpośrednio do repozytorium.  
- **Schematy gotowe** – przygotowane wcześniej podczas wdrożenia (np. dział handlowy, otwarty, wg klienta).  
- **Schemat własny** – schemat, który możesz samodzielnie zdefiniować i w razie potrzeby edytować.  

![Wybór schematu otwartego](/img/przyklad13.png)

Jeżeli wybrany schemat można edytować lub tworzymy własny – obok pola pojawia się **niebieska ikona edycji**.  
Kliknij ją, aby otworzyć okno konfiguracji.  

![Ikona edycji schematu](/img/obieg8.png)  

---

## Definiowanie własnego schematu  

Po kliknięciu ikony otwiera się okno **Własny schemat**.  

![Okno własny schemat](/img/obieg9.png)  

### Typ schematu  

Wybierz sposób zatwierdzania dokumentu:  
- **Wszyscy** – wszyscy wskazani użytkownicy lub grupy muszą zatwierdzić dokument.  
- **Jeden z** – wystarczy, że jeden z odbiorców go zatwierdzi.  
- **(N) z** – określona liczba osób (np. 2 z 3) musi zatwierdzić dokument.  

![Typ schematu](/img/obieg10.png)  

### Kroki schematu  

Każdy schemat składa się z kolejnych kroków:  

1. **Kolejność** – numer kroku, zaczynamy od `0`.  
2. **Typ** – wybierz, kto ma być odbiorcą:  
   - **Użytkownik** – wybierasz konkretnego użytkownika,  
   - **Grupa użytkowników** – wybierasz grupę (np. dział, księgowość),  
   - **Schemat autoryzacji** – możesz wstawić inny schemat.  
3. **Odbiorca** – wybierz osobę lub grupę z listy.  

![Kroki schematu](/img/obieg11.png)  

Nowe linie kroków tworzą się automatycznie po dodaniu odbiorcy.  

---

### Usuwanie kroków  

Jeżeli linia została dodana błędnie:  
1. Zaznacz ją,  
2. Kliknij menu w prawym górnym rogu,  
3. Wybierz **Usuń linię**.  

![Usuń linię](/img/obieg12.png)  

---

### Zatwierdzenie schematu  

Po uzupełnieniu wszystkich kroków:  
1. Kliknij **OK**,  
2. Następnie kliknij **Zapisz** w głównym oknie dokumentu.  

Schemat zostaje zapisany i użyty dla bieżącego obiegu. 

---

## Zatwierdzanie i odrzucanie  

Gdy dokument został wysłany w obieg i wymaga autoryzacji:  
- Osoba odpowiedzialna za dany etap procesu widzi opcję **Zatwierdź** po lewej stronie.  
- W menu operacji dostępna jest także opcja **Odrzuć**.  

![Zatwierdź lub odrzuć](/img/obieg2.png)  

Po wybraniu schematu, w zakładce wyświetla się jego przebieg – możesz zobaczyć, na jakim etapie jest dokument i kto jest aktualnie odpowiedzialny za decyzję.  

### Okno zatwierdzania / odrzucania  

Przy wyborze **Zatwierdź** lub **Odrzuć** otwiera się dodatkowe okno, którego zawartość zależy od wybranego schematu autoryzacji. Na przykład:

- W niektórych schematach należy wskazać **kolejnego użytkownika**, który ma otrzymać dokument do akceptacji.
- W niektórych schematach należy wskazać odpowiedni **dalszy schemat**.
- Można również wpisać **uwagi** do zatwierdzenia lub odrzucenia.

Pozostawienie pola pustego powoduje przekierowanie dokumentu np. do księgowości.  

![Okno zatwierdzania](/img/obieg4.png)  

⚠️ Przy odrzucaniu dokumentu system może dodatkowo wymagać podania przyczyny – wtedy pojawia się komunikat:  

![Komunikat przy odrzucaniu](/img/obieg7.png)  



---

### Zatwierdzanie i odrzucanie – zapis zmian  

Po kliknięciu **Zatwierdź** lub **Odrzuć** dokument zostaje oznaczony jako wstępnie przetworzony – pojawia się odpowiedni komunikat:  

![Komunikat wstępny](/img/obieg5.png)  

⚠️ Operacja nie jest jeszcze ostateczna. Aby ją zatwierdzić:  

1. Kliknij przycisk **Zapisz** w prawym górnym rogu.  
   ![Zapisz dokument](/img/obieg6.png)  

2. Dopiero po zapisaniu decyzja zostaje trwale przypisana do dokumentu i widoczna w jego obiegu.

Po zapisaniu:  
- dokument znika z listy w sekcji **Oczekujące** u aktualnego użytkownika,  
- pokazuje się tylko osobie, która jest **kolejnym uczestnikiem procesu zatwierdzania**,  
- jeżeli proces autoryzacji dobiegł końca, dokument trafia do odpowiedniego folderu w **Repozytorium**.  

---

## Nowy przebieg  

W niektórych schematach istnieje możliwość ich zmiany w trakcie trwania obiegu.  
Jeżeli opcja **Nowy przebieg** nie jest wyszarzona:  

![Nowy przebieg](/img/obieg3.png) 

- Kliknij **Nowy przebieg**,  
- Wybierz inny schemat autoryzacji.

---

