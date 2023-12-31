# III. Role

នេះគឺជា Role គឺជា «តួនាទី» <br>
អ្នកប្រើប្រាស់អាចធ្វើការកំណត់រាល់ `តួរនាទី` ទៅលើមុខងារមួយចំនួន :

**Create Role**

- Read (អាចអាន)
- Write (អាចសរសេរ)
- Modify (អាចកែកែប្រែ)
- Remove (អាចដកចេញ)
- Action (អាចធ្វើសកម្មភាពផ្សេងៗបានទៀត)

::: danger ការយល់ដឹងបន្ថែម
ក្រោយអ្នកប្រើប្រាស់ធ្វើការចុចលើ ( **・・・** )
ព័ត៌មាននឹងបង្ហាញ :

- Edit
- Disable
- Manage Access
:::
<hr>

នេះជាផ្ទាំងព័ត៌មានក្រោយពីអ្នកប្រើប្រាស់ចូលទៅកាន់គេហទំព័រ **Roles** រួចរាល់ :

![Pic ](./pictures/Roles/InformationInRoles.png)

## ១. ការស្វែងយល់ពីចំណុច Edit

::: tip វិធីសាស្ត្រយល់ដឹងអំពី Edit
អ្នកប្រើប្រាស់បានទទួលព័ត៌មាន **Update Role** ក្រោយពីចុច Edit រួច:

- អ្នកប្រើប្រាស់អាចធ្វើការផ្លាស់ប្តូរ ឈ្មោះ ( _Name Role_ ) បាន

![Pic ](./pictures/Roles/Edite.png)

- អ្នកប្រើប្រាស់អាចចុច _Save_ ដើម្បីទទួលយកអ្វីដែលអ្នកកែប្រែថ្មី
- ករណីមិនចង់កែប្រែទេ សូមធ្វើការចុច _Close_ ជាការស្រេច

:::

## ២. ការប្រើប្រាស់​ Disable នៃ Roles

::: tip វិធីសាស្ត្រយល់ដឹងពី Disable លើ Roles
ដោយគ្រាន់តែអ្នកប្រើប្រាស់ធ្វើការចុចលើ _Disable_ ព័ត៌មាននឹងបង្ហាញមកថា
`Are you sure?`

- អ្នកប្រើប្រាស់អាចចុច _Yes_ ដើម្បីធ្វើការលុបចោល
- ករណីមិនចង់លុបទេ សូមធ្វើការចុច _Cancel_ ជាការស្រេច

![Pic ](./pictures/Roles/Disable.png)

> បន្ទាប់ពីធ្វើការ ចុច `Yes` ក្នុង **Disable** រួចឃើញថា មុខងារដែលអ្នកប្រើប្រាស់ចង់លុបចេញ បានជោគជ័យ ✅
:::

## ៣. ការបង្កើតតួនាទី Create Role ដោយជោគជ័យ ✔
::: tip វិធីសាស្ត្រយល់ដឹងអំពីដំណើរការ Create Role បានត្រឹមត្រូវ
- ដំបូងអ្នកប្រើប្រាស់ចុច `Create Role`
- បំពេញឈ្មោះដែលសាកសមនឹងតួនាទី
- ចុច *Save* ដើម្បីបញ្ចប់ដំណើរការ

![Pic ](./pictures/Roles/createRole.png)
<hr>

![Pic ](./pictures/Roles/createRole2.png)
<hr>

![Pic ](./pictures/Roles/createRole3.png)

ព័ត៌មានបញ្ជាក់ពីការបង្កើតបាន *ជោគជ័យ* គឺ : `Created Successfully` ✅
<hr>

![Pic ](./pictures/Roles/createRole4.png)
:::

## ៥. ការបង្កើតតួនាទី Create Role បរាជ័យ ❌
::: tip វិធីសាស្ត្រយល់ដឹងអំពីដំណើរការ Create Role មិនបានត្រឹមត្រូវ
- ករណីថាអ្នកប្រើប្រាស់បានបំពេញឈ្មោះមួយពីមុនមកហើយ (*ឧទាហរណ៍ : Kunthea*)
- តែចង់បំពេញឈ្មោះនោះជាលើកទី ២ 
- តួនាទីនោះមិនអាចដំណើរការបានទេ ❎

![Pic ](./pictures/Roles/CreateRoleFail.png)
ព័ត៌មានបញ្ជាក់ពីការបង្កើត *បរាជ័យ* គឺ : 
- ការផ្តល់មកវិញថា : *Created Failure*
- *Name already existed!*
- សូមធ្វើការបំពេញជាថ្មី `Try again`
:::