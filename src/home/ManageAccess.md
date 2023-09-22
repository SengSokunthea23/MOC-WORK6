# I. Manage Access

នេះជាគេហទំព័រសម្រាប់ណែនាំដល់ Admin ដែលមានតួនាទីសំខាន់សម្រាប់គ្រប់គ្រងមុខងារដែលស្ថិតក្នុងគេហទំព័រ `Roles`
::: danger ចំណាំ
ដើម្បីដំណើរការដល់ចំណុចនីមួយៗ **Admin** គប្បីធ្វើការ *Assign Role* ដល់ User ក្នុងគេហទំព័រ `Users` លើចំណុច _Action_ ជាមុនសិន

![Pic ](./pictures/Roles/ManageAccess/actionInUsers.png)
<hr>

បន្ទាប់ពីចូលក្នុង Action រួច :
![Pic ](./pictures/Roles/ManageAccess/assignRole.png)
:::
## ១. ការយល់ដឹងអំពីព័ត៌មានក្នុង Manage Access នៃ Roles

::: tip វិធីសាស្ត្រយល់ច្បាស់ជាមួយនឹងការប្រើប្រាស់ Manage Access
![Pic ](./pictures/Roles/ManageAccess.png)

ការចូលទៅកាន់ Manage Access ព័ត៌មានទាំងអស់នឹងមានបង្ហាញ :
ព័ត៌មានចំនួន ២ គឺ

- User Actions
- User Interface
<hr>

> _User Actions_ : រាល់ព័ត៌មានទាំងអស់អ្នកប្រើប្រាស់អាចមើលឃើញមុខងាផ្សេងៗ
> បន្ថែមពីនោះចំណុច `READ *` ជាចំណុចដែលអ្នកប្រើប្រាស់មិនអាចកែប្រែបាន
> ![Pic ](./pictures/Roles/Interface/ActionsInRoles.png)
> អ្នកប្រើប្រាស់អាចធ្វើការដក ឬ ដាក់នូវមុខងារទាំងអស់បាន

<hr>

> _User Interface_ : អ្នកប្រើប្រាស់អាចធ្វើការកំណត់ព័ត៌មានលើចំណុចនីមួយៗ
> ![Pic ](./pictures/Roles/Interface/InterfaceInRole.png)

- ចុច _Save_ ដើម្បីធ្វើការបញ្ជាក់ថាការចង់រក្សាទុក
- ចុច _Cancel_ សម្រាប់ទៅរកទម្រង់ដើម
  :::

## ២. ការមិនបើកចំណុចទាំងអស់ក្នុង User Permissions និង User Interface

::: tip វិធីសាស្ត្រយល់ដឹងអំពីការកំណត់ព័ត៌មានក្នុង User Permissions និង User Interface

- សម្រាប់ Admin មិនបាន Click ✅ ក្នុងចំណុចណាមួយនៃ User Permissions និង User Interface ទេ ។
- ក្រោយចុច _Save_ រួច _User_ ដែលបានបង្កើតដោយ `Admin` នោះ មានតួនាទីជា _default_ _(លំនាំដើម ឬ លំនាំធម្មតា)_

ព័ត៌មានសម្រាប់ Admin :
![Pic ](./pictures/Roles/ManageAccess/noneClickAll.png)

<hr>

ព័ត៌មានសម្រាប់ User :
![Pic ](./pictures/Roles/ManageAccess/default.png)
:::

## ៣. ការបើកអនុញ្ញាតសកម្មភាពទាំងអស់ក្នុង User Interface
::: tip វិធីសាស្ត្រយល់ដឹងអំពីការបើកគ្រប់ចំណុចទាំងអស់ក្នុងគេហទំព័រ User Interface
- ចូលទៅកាន់ _User Interface_ ក្នុងចំណុច `Dashbord`
- ផ្តល់ព័ត៌មានគ្រប់ចំណុចដែលមិនទាន់បានបំពេញរួច

ព័ត៌មានសម្រាប់ Admin ត្រូវធ្វើ :
![Pic ](./pictures/Roles/ManageAccess/UserInterface.png)
<hr>

 ![Pic ](./pictures/Roles/ManageAccess/UserInterfaceWithAllClick.png)
`Admin` បានផ្តល់តួនាទីឲ្យ **User** ចូលក្នុងប្រព័ន្ធបានត្រឹមតែចូលមើលតែប៉ុណ្ណោះ!
<hr>

ព័ត៌មានសម្រាប់ User ត្រូវដឹង :  <br>
Coming soon ....
::: 
## ៤.ការអនុញ្ញាតទាំងអស់នៅក្នុង User Permissions  និង User Interface គ្រប់ចំណុច
::: tip វិធីសាស្ត្រយល់ដឹងអំពីការបើកដំណើរការនូវសកម្មភាពផ្សេងៗក្នុងចំណុចទាំងពីរធំៗ
- ចូលទៅកាន់ Manage Access ដដែលបន្ទាប់មកចូលទៅចុចអនុញ្ញាតទាំងពីរចំណុចធំៗរួមមាន `User Permissions` និង `User Interface` 
- ក្នុង `User Interface` ចុចអនុញ្ញាតទាំង *Dashboard* , *Cloud Storage* , *Recovery* , *Settings* ផងដែរ ។

ព័ត៌មានសម្រាប់ Admin ត្រូវធ្វើ :
![Pic ](./pictures/Roles/ManageAccess/clickallinManageAccess.png)
>ការបើកចំណុចទាំងពីរខាងលើគឺអនុញ្ញាតឲ្យ User (អ្នកប្រើប្រាស់) មានសិទ្ធិក្នុងការកែប្រែ (Edit, Modify and Remove) គ្រប់ចំណុចលើ Website បាន

ក្នុង **Dashboard** អ្នកប្រើប្រាស់អាច :
- អាចចូលមើលនឹងកែប្រែគ្រប់ចំណុចដែលមាន
- គ្រប់ព័ត៌មានរបស់ User (អ្នកប្រើប្រាស់) អាចដឹងបាន

![Pic ](./pictures/Roles/ManageAccess/dashboradNews.png)

នៅក្នុង **Cloud Storage** អ្នកប្រើប្រាស់អាច :
- បង្កើត Batch Upload 
- បង្កើត File 
- បង្កើត Folder

![Pic ](./pictures/Roles/ManageAccess/AddFile.png)
<hr>

ក្នុង **Recovery** អ្នកប្រើប្រាស់អាច : 
- ធ្វើការ «Recovery» (ការយកមកប្រើប្រាស់ជាថ្មី) និង «Delete» ចំពោះ Folder ជាមួយនឹង ទិន្នន័យផ្សេងៗ​ដែលអ្នកប្រើប្រាស់យល់ថាមានបញ្ហា ឬុ ចង់លុបចេញ

![Pic ](./pictures/Roles/ManageAccess/Recovery.png)
<hr>

ក្នុង **Settings** អ្នកប្រើប្រាស់អាចធ្វើការជាធម្មតា !! 
:::
## ៥. ការអនុញ្ញាតត្រឹមតែការចូលមើល តែមិនអាចធ្វើការកំណត់បាន
::: tip វិធីសាស្ត្រយល់ដឹងអំពីការកំណត់មិនឲ្យធ្វើអ្វីបានក្រៅពីការអាន
ព័ត៌មានសម្រាប់ Admin ត្រូវធ្វើ :

- ចំពោះ User Permission មិនតម្រូវឲ្យបិទនោះទេ ❌
- Admin ផ្តល់ត្រឹមការអាន និង មើល ដល់ User (អ្នកប្រើប្រាស់) <br> ការធ្វើបែបនេះតម្រូវឲ្យបិទសញ្ញា Click ✅ ក្នុង User Interface 
- អ្នកប្រើប្រាស់ ពុំអាចធ្វើការបានទេក្រោយ Admin បានកំណត់រួច

![Pic ](./pictures/Roles/ManageAccess/clickAllUserPermission(2).png)
<hr>

![Pic ](./pictures/Roles/ManageAccess/clickAllUserPermission.png)

ព័ត៌មានសម្រាប់ User (អ្នកប្រើប្រាស់) ត្រូវដឹង :
- អ្នកប្រើប្រាស់ពុំអាចធ្វើការមើលឃើញ ការបង្ហាញព័ត៌មាននៅផ្នែកខាងឆ្វេង (Sidebar) បានទេ
- អ្នកប្រើប្រាស់មើលបានតែព័ត៌មាន *Settings* មួយតែប៉ុណ្ណោះ <br> ក្នុងនោះទទួលបានតែ *( Account* និង *change Password)* តែប៉ុណ្ណោះ ។ 
- អាចធ្វើការបានត្រឹមតែ `Change Password (ប្តូរពាក្យសម្ងាត់)` និង `Account(បង្កើតព័ត៌មានផ្ទាល់ខ្លួន)` តែប៉ុណ្ណោះ ។
- ការផ្លាស់ប្តូរពាក្យសម្ងាត់រួចនឹងលោតទៅកាន់គេហទំព័រដើមវិញ

![Pic ](./pictures/Roles/ManageAccess/OnlyViewSettings.png)