<template>
  <div>
    <GoHome></GoHome>
    <div class="box s-normal">
      <h1>
        My recommended standard when testing beta versions of Windows
      </h1>
    </div>
    <div class="box s-max large">
      <p>
        I was also in that background where I no longer knew whether to test the
        betas as 16 colors or force myself to emulate it with PCem, or run the
        beta without Aero or special graphic features, even without a network,
        but here I will be recompiling which virtualizers to use when testing
        certain Windows builds.
      </p>
      <p>
        For me, having a pleasant speed, and having all the features of the
        operating system active, is the best way to test a beta version of
        Windows (hardware specific tests do not enter here), so here is the
        list.
      </p>
    </div>
    <ul id="list">
      <div class="box s-normal">
        <li>
          Windows NT 3.1 build 475+, Windows NT 3.50 and 3.51 RTM
        </li>
      </div>
      <div class="box s-max large">
        I recommend using VirtualBox, using OS Windows NT 3.x.<br /><br />If for
        some reason it fails, use Other Windows (32-bit).<br /><br />No, giving
        them specific names doesn't help.<br /><br />Use the VirtualBox video
        driver that is compatible from NT 3.1 to Windows 7.<br /><br />Get
        networking with the AMD PC-NET driver.
      </div>
      <div class="box s-normal">
        <li>
          Windows 9x versions less than Windows 95 B, Windows NT versions less
          than NT 4.0
        </li>
      </div>

      <div class="box s-max large">
        For 16-bit versions: I only know that Virtual PC 2007 can run on certain
        versions, if in any case something fails you should use an emulator like
        PCem.<br /><br />
        For 32-bit versions (NT): I recommend VirtualBox, use the video driver
        that is compatible from NT 3.1 to Windows 7.
      </div>
      <div class="box s-normal">
        <li>Windows 95 version B or higher</li>
      </div>

      <div class="box s-max large">
        I recommend VMware, with the default settings.<br /><br />
        Get sound with setting the sound adapter to SoundBlaster 16.<br /><br />
        VM Tweaker:
        <a href="https://sourceforge.net/projects/vmtweaker/files/latest/download"
          target="_blank">https://sourceforge.net/projects/vmtweaker/files/latest/download</a>
      </div>
      <div class="box s-normal">
        <li>Windows 98 build 4.10.1691.3 or minor</li>
      </div>

      <div class="box s-max large">
        I recommend VirtualBox, use it with Legacy virtualization mode without
        Nested Paging, with OS Windows 95, and without enabling ACPI, everything
        else by default.<br /><br />You can get 32-bit mode with a generic VESA
        driver.<br /><br />Disable ACPI on VirtualBox:
        <span class="code">VBoxManage modifyvm "myname" --acpi off</span>
      </div>

      <div class="box s-normal">
        <li>Windows 98 build 4.10.1702 or higher</li>
      </div>

      <div class="box s-max large">
        I recommend VMware, with the default settings.<br /><br />Remember the
        driver that had to be installed manually with Windows 95? Use that to
        get 32-bit mode.<br /><br />
        Get sound with setting the sound adapter to SoundBlaster 16.
      </div>

      <div class="box s-normal">
        <li>Windows 2000 (any beta)</li>
      </div>

      <div class="box s-max large">
        It will depend on the build. Some builds work with VMware with 6.5-7.x
        compatibility mode without ACPI, if this is the case:<br /><br />
        -> Use the video driver that Windows NT 4.0 uses.<br />
        -> Use the VMware 6.5 drivers.<br /><br />
        If it fails with VMware, use VirtualBox (if it fails, without enabling
        ACPI, see
        <a href="https://www.betaarchive.com/forum/viewtopic.php?p=448150#p448150" target="_blank">here</a>), everything
        else by default.<br /><br />Use the VirtualBox video
        driver that is compatible from NT 3.1 to Windows 7.<br /><br />Disable
        ACPI on VMware (Put this in the last line of the VM's .vmx):
        <span class="code">acpi.present = "FALSE"</span>
      </div>

      <div class="box s-normal">
        <li>Windows Neptune, Windows Whistler (any beta)</li>
      </div>

      <div class="box s-max large">
        I recommend VMware, with VMware 6.5-7.x support, with the default
        settings, and disabling ACPI if installation fails.<br /><br />Get
        32-bit mode and sound with VMware 7.0 drivers.
      </div>

      <div class="box s-normal">
        <li>Windows Longhorn (any beta)</li>
      </div>

      <div class="box s-max large">
        I recommend VMware.<br /><br />
        Get sound with VMware 7.0 drivers
        <br /><br />
        For the pre-reset builds, with VMware 6.5-7.x support, with the default
        settings.<br />Get special features with VMware 6.5.2 drivers<br />More
        information here:
        <a href="https://longhorn.ms/desktop-compositing/" target="_blank">https://longhorn.ms/desktop-compositing/</a>
        <br /><br />
        For the post-reset builds: with VMware 10.x support, with the default
        settings.<br />
        Get special features with VMware 11.x (or 14.x) WDDM drivers.<br />More
        information here:
        <a href="https://www.betaarchive.com/forum/viewtopic.php?t=34077"
          target="_blank">https://www.betaarchive.com/forum/viewtopic.php?t=34077</a>
        <br />Some builds like 5219 may require you to use a VMware (the program itself) version minor than 12, using
        higher versions break the way DWM works in this build (flickering screen)
        <br /><br />For these two, remember
        to enable 3D acceleration.
      </div>

      <div class="box s-normal">
        <li>Windows 7 (any beta)</li>
      </div>

      <div class="box s-max large">
        I recommend VMware, with VMware 10.x support, with the default
        settings.<br /><br />Get Aero features with VMware 11.x (or 14.x) WDDM drivers,
        remember to enable 3D acceleration.
      </div>

      <div class="box s-normal">
        <li>Windows 8 and 10 (any beta)</li>
      </div>

      <div class="box s-max large">
        With the exception of the Windows 8 builds that still have Aero, use
        VMware, with VMware 10.x support, with the default settings, using the
        11.x (or 14.x) drivers with 3D acceleration enabled.<br /><br />After that, I don't think it makes sense to
        recommend virtualizers, after all they are recent systems, and any
        virtualizer should run them.<br /><br />If you still want my opinion,
        use VMware with the default options.
      </div>

    </ul>
  </div>
</template>

<style scoped>
.large {
  padding: 8px;
  background-color: #00ffbbdb;
  font-size: 20px !important;
}

.code {
  border-radius: 5px;
  background-color: rgb(177, 0, 0);
  color: #fff;
}

@media only screen and (max-width: 1024px) {
  #list {
    padding: 0;
  }

  #list>.box {
    margin: auto
  }
}
</style>

<script>
import GoHome from "@/components/go-home.vue";
export default {
  name: "my-vm-standard",
  components: { GoHome },
};
</script>